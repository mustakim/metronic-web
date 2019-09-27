"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
// Angular
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
// RxJS
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// Auth
var auth_1 = require("../../../../core/auth");
/**
 * ! Just example => Should be removed in development
 */
var DEMO_PARAMS = {
    EMAIL: 'admin@demo.com',
    PASSWORD: 'demo'
};
var LoginComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param router: Router
     * @param auth: AuthService
     * @param authNoticeService: AuthNoticeService
     * @param translate: TranslateService
     * @param store: Store<AppState>
     * @param fb: FormBuilder
     * @param cdr
     */
    function LoginComponent(router, auth, authNoticeService, translate, store, fb, cdr) {
        this.router = router;
        this.auth = auth;
        this.authNoticeService = authNoticeService;
        this.translate = translate;
        this.store = store;
        this.fb = fb;
        this.cdr = cdr;
        this.loading = false;
        this.errors = [];
        this.unsubscribe = new rxjs_1.Subject();
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    LoginComponent.prototype.ngOnInit = function () {
        this.initLoginForm();
    };
    /**
     * On destroy
     */
    LoginComponent.prototype.ngOnDestroy = function () {
        this.authNoticeService.setNotice(null);
        this.unsubscribe.next();
        this.unsubscribe.complete();
        this.loading = false;
    };
    /**
     * Form initalization
     * Default params, validators
     */
    LoginComponent.prototype.initLoginForm = function () {
        // demo message to show
        if (!this.authNoticeService.onNoticeChanged$.getValue()) {
            var initialNotice = "Use account\n\t\t\t<strong>" + DEMO_PARAMS.EMAIL + "</strong> and password\n\t\t\t<strong>" + DEMO_PARAMS.PASSWORD + "</strong> to continue.";
            this.authNoticeService.setNotice(initialNotice, 'info');
        }
        this.loginForm = this.fb.group({
            email: [DEMO_PARAMS.EMAIL, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.email,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(320) // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
                ])
            ],
            password: [DEMO_PARAMS.PASSWORD, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(100)
                ])
            ]
        });
    };
    /**
     * Form Submit
     */
    LoginComponent.prototype.submit = function () {
        var _this = this;
        var controls = this.loginForm.controls;
        /** check form */
        if (this.loginForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            return;
        }
        this.loading = true;
        var authData = {
            email: controls['email'].value,
            password: controls['password'].value
        };
        this.auth
            .login(authData.email, authData.password)
            .pipe(operators_1.tap(function (user) {
            if (user) {
                _this.store.dispatch(new auth_1.Login({ authToken: user.accessToken }));
                _this.router.navigateByUrl('/'); // Main page
            }
            else {
                _this.authNoticeService.setNotice(_this.translate.instant('AUTH.VALIDATION.INVALID_LOGIN'), 'danger');
            }
        }), operators_1.takeUntil(this.unsubscribe), operators_1.finalize(function () {
            _this.loading = false;
            _this.cdr.detectChanges();
        }))
            .subscribe();
    };
    /**
     * Checking control validation
     *
     * @param controlName: string => Equals to formControlName
     * @param validationType: string => Equals to valitors name
     */
    LoginComponent.prototype.isControlHasError = function (controlName, validationType) {
        var control = this.loginForm.controls[controlName];
        if (!control) {
            return false;
        }
        var result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'kt-login',
            templateUrl: './login.component.html',
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

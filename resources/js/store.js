!(function webpackMissingModule() {

            var user = !(function webpackMissingModule(){ ({
            state: {
            currentUser: user,
            isLoggedIn: !!user,
            loading: false,
            auth_error: null,
            reg_error: null,
            registeredUser: null
        },
        getters: {
            isLoading: function isLoading(state) {
            return state.loading;
            },
            isLoggedin: function isLoggedin(state) {
            return state.isLoggedin;
            },
            currentUser: function currentUser(state) {
            return state.currentUser;
            },
            authError: function authError(state) {
            return state.auth_error;
            },
            regError: function regError(state) {
            return state.reg_error;
            },
            registeredUser: function registeredUser(state) {
            return state.registeredUser;
            }
        },
        mutations: {
            login: function login(state) {
            state.loading = true;
            state.auth_error = null;
            },
            loginSuccess: function loginSuccess(state, payload) {
            state.auth_error = null;
            state.isLoggedin = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, {
                token: payload.access_token
            });
            localStorage.setItem('user', JSON.stringify(state.currentUser));
            },
            loginFailed: function loginFailed(state, payload) {
            state.loading = false;
            state.auth_error = payload.error;
            },
            logout: function logout(state) {
            localStorage.removeItem('user');
            state.isLoggedin = false;
            state.currentUser = null;
            },
            registerSuccess: function registerSuccess(state, payload) {
            state.reg_error = null;
            state.registeredUser = payload.user;
            },
            registerFailed: function registerFailed(state, payload) {
            state.reg_error = payload.error;
            }
        },
        actions: {
            login: function login(context) {
            context.commit('login');
            }
        }
    
    })
})
});
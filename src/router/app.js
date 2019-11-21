export default {
    routes: [{
        path: '/GoogleMap',
        name: 'googlemap',
        component: resolve => require(['modules/GoogleMap.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
        
        
        
        {
        path: '/',
        name: 'LandingPage',
        component: resolve => require(['modules/LandingPage.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    // {
    //     path: '/Home',
    //     name: 'home',
    //     component: resolve => require(['modules/Dashboard.vue'], resolve),
    //     meta: {
    //         tokenRequired: false
    //     }
    // },
        {
        path: '/Login',
        name: 'login',
        component: resolve => require(['modules/Login.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/Register',
        name: 'register',
        component: resolve => require(['modules/Register.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/main',
        name: 'main',
        component: resolve => require(['modules/Register.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: resolve => require(['modules/Dashboard.vue'], resolve),
        meta: {
            tokenRequired: true
        },
    },
    {
        path: '/Subjects',
        name: 'Subjects',
        component: resolve => require(['modules/Subjects.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    // {
    //     path: '/Timeline',
    //     name: 'Timeline',
    //     component: resolve => require(['modules/Timeline.vue'], resolve),
    //     meta: {
    //         tokenRequired: false
    //     }
    // },
    {
        path: '/PersonalInfo',
        name: 'PersonalInfo',
        component: resolve => require(['modules/PersonalInfo.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/Update',
        name: 'UpdateInfo',
        component: resolve => require(['modules/Update.vue'], resolve),
        meta: {
            tokenRequired: false
        }

    },
    {
        path: '/confirmLogout',
        name: 'confirmLogout',
        component: resolve => require(['modules/confirmLogout.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    }
]
}
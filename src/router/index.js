import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index';

import IndexPage from "@/views/IndexPage.vue";
import FeaturesPage from "@/views/FeaturesPage.vue";
import ExamplesPage from "@/views/ExamplesPage.vue";
import IventsPage from "@/views/IventsPage.vue";
import ReviewsPage from "@/views/ReviewsPage.vue";

import ToxicityPage from "@/views/ToxicityPage.vue";
import QnaPage from "@/views/QnaPage.vue";
import UsePage from "@/views/UsePage.vue";
import AssistantPage from "@/views/AssistantPage.vue";
import IdentityPage from "@/views/IdentityPage.vue";

// import auth from './middleware/auth'
// import axios from 'axios'

// import token from './middleware/token'
// import store from '../store'
// import MiddlewarePlugin from 'vue-router-middleware-plugin'

import {
  hasAuthToken,
  // getAuthToken,
  // removeAuthToken
} from "@/utils/auth";

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: () => import('@/layouts/Default'),
  children: [{
    path: "/",
    name: "Index",
    component: IndexPage,
  },
  {
    path: "/features",
    name: "Features",
    component: FeaturesPage,
  },
  {
    path: "/features/toxicity",
    name: "Toxicity",
    component: ToxicityPage,
  },
  {
    path: "/features/qna",
    name: "Questions and Answers",
    component: QnaPage,
  },
  {
    path: "/features/use",
    name: "Universal Sentence Encoder",
    component: UsePage,
  },
  {
    path: "/features/assistant",
    name: "Assistant",
    component: AssistantPage,
  },
  {
    path: "/features/identity",
    name: "Identity",
    component: IdentityPage,
  },
  {
    path: "/examples",
    name: "Examples",
    component: ExamplesPage,
  },
  {
    path: "/ivents",
    name: "Ivents",
    component: IventsPage,
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: ReviewsPage,
  },
  ]


}]

const router = new VueRouter({
  routes
})
router.beforeEach(async (to, from, next) => {
  console.log('beforeEach')
  console.log('url', window.location.href)
  console.log('hasAuthToken', hasAuthToken())

  if (hasAuthToken() && to.name!== 'index') {
    console.log('login')
  
    // If the user is not logged in but has auth token
    try {

      await store.dispatch('handleLogin');
      console.log('handleLogin')
      next()
    } catch (e) {
      console.error('error', e);
      next(
        {
          name: 'index'
        }
      )
      // if (e.response) {
      //   if (e.response.status >= 400 && e.response.status < 500) {
      //     console.log('delete token')
      //     removeAuthToken();
      //     next(
      //       {
      //         name: 'index'
      //       }
      //     )
      //     store.commit("setLoggedIn", false);
          
      //   }
      //   // if (e.response.status >= 500) {
      //   //   next({
      //   //     name: 'GlobalError'
      //   //   });
      //   //   return;
      //   // }
      // }
    }
  }
  else {
    console.log('main page')
    next()
  }
  // else if (process.env.NODE_ENV !== 'production') {
  //   console.log('123')
  //   await store.dispatch('handleLogin');
  //   next()
  // }
  // else {
  //   next()

  // }

  // else {
  //   console.log('next')
  //   next()
  // }
  

  // if (store.state.user.loggedIn) {
  //   if (to.meta.anonymousOnly) {
  //     next('/');
  //     return;
  //   }

  //   if (to.meta && to.meta.roles) {
  //     const hasRole = store.getters['user/dynamicRoles'].some(role => to.meta.roles.includes(role));
  //     if ((hasRole ^ (to.meta.excludeRoles ? 1 : 0)) ||
  //       to.meta.allowForUsers ? .includes(store.state.user.data.id) ||
  //       to.meta.allowForRuzGroups ? .includes(store.getters["user/ruzGroup"])) {
  //       next();
  //     } else {
  //       next(false);
  //     }
  //   } else {
  //     next();
  //   }
  // } else {
  //   next();
  // }
})

export default router
import VueRouter from 'vue-router';

// dashboard
import AdminApp from './components/pages/AdminApp.vue';
import HomePage from './components/pages/Home.vue';
import LoginPage from './components/pages/Login.vue';
import RouteWrap from './components/common/RouteWrap.vue';

// products
import ProductIndex from './components/pages/products/Index.vue';
import ProductNew from './components/pages/products/New.vue';
import ProductEdit from './components/pages/products/Edit.vue';
import ProductList from './components/pages/products/List.vue';
import ProductCategories from './components/pages/products/Categories.vue';
import WorkshopNew from './components/pages/workshop/New.vue';
import WorkshopEdit from './components/pages/workshop/Edit.vue';
import WorkshopList from './components/pages/workshop/List.vue';

// sales
import SalesIndex from './components/pages/sales/Index.vue';
import SalesNew from './components/pages/sales/New.vue';
import SalesView from './components/pages/sales/View.vue';
import PurchasesIndex from './components/pages/purchases/Index.vue';
import PurchasesNew from './components/pages/purchases/New.vue';
import PurchasesView from './components/pages/purchases/View.vue';
import ContactsNew from './components/pages/contacts/New.vue';
import ContactsEdit from './components/pages/contacts/Edit.vue';
import ContactsList from './components/pages/contacts/List.vue';

// site options
import SiteHome from './components/pages/site/Home.vue';
import SiteContact from './components/pages/site/Contact.vue';
import SiteGeneral from './components/pages/site/General.vue';
import SiteIndex from './components/pages/site/Index.vue';
import PageBuilderNew from './components/pages/page-builder/New.vue';
import PageBuilderEdit from './components/pages/page-builder/Edit.vue';
import PageBuilderList from './components/pages/page-builder/List.vue';

// user admin
import UsersNew from './components/pages/users/New.vue';
import UsersEdit from './components/pages/users/Edit.vue';
import UsersIndex from './components/pages/users/Index.vue';

import Tests from './components/pages/admin/Tests.vue';
import Register from './components/pages/admin/Register.vue';
import Account from './components/pages/admin/Account.vue';
import Users from './components/pages/admin/Users.vue';

// error
import Error404 from './components/pages/404.vue';
import Error403 from './components/pages/403.vue';
import Error502 from './components/pages/502.vue';

// Router
const router = new VueRouter({
  hashbang: false,
  linkActiveClass: 'active',
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', redirect: { name: 'admin' } },
    { path: '/login', name: 'login', component: LoginPage, meta: { auth: false } },
    {
      path: '/admin',
      component: AdminApp,
      meta: {
        auth: { roles: 'admin', redirect: { name: 'login' }, forbiddenRedirect: '/403' },
        title: 'Home',
      },
      children: [
        { path: '', name: 'admin', component: HomePage },
        {
          path: 'products',
          component: RouteWrap,
          meta: { title: 'Products' },
          children: [
            { path: '', name: 'products-index', component: ProductIndex },
            { path: 'new', name: 'new-product', component: ProductNew, meta: { title: 'New' } },
            { path: 'edit/:id?', name: 'edit-product', component: ProductEdit, meta: { title: 'Edit' } },
            { path: 'list', name: 'list-products', component: ProductList, meta: { title: 'List' } },
            { path: 'categories', name: 'edit-categories', component: ProductCategories, meta: { title: 'Categories' } },
          ],
        },
        {
          path: 'workshop',
          component: RouteWrap,
          meta: { title: 'Workshop' },
          children: [
            { path: 'new', name: 'new-workshop', component: WorkshopNew, meta: { title: 'New' } },
            { path: 'edit/:id', name: 'edit-workshop', component: WorkshopEdit, meta: { title: 'Edit' } },
            { path: 'list', name: 'list-workshop', component: WorkshopList, meta: { title: 'List' } },
          ],
        },
        {
          path: 'sales',
          component: RouteWrap,
          meta: { title: 'Sales' },
          children: [
            { path: '', name: 'sales-index', component: SalesIndex },
            { path: 'new', name: 'new-sale', component: SalesNew, meta: { title: 'New' } },
            { path: 'view/:id', name: 'view-sale', component: SalesView, meta: { title: 'View' } },
            { path: '/admin/contacts/new', name: 'new-contact', component: ContactsNew, meta: { title: 'New Contact' } },
            { path: '/admin/contacts/edit/:id', name: 'edit-contact', component: ContactsEdit, meta: { title: 'Edit Contact' } },
            { path: '/admin/contacts/list', name: 'list-contacts', component: ContactsList, meta: { title: 'Contacts List' } },
          ],
        },
        {
          path: 'purchases',
          component: RouteWrap,
          meta: { title: 'Purchases' },
          children: [
            { path: '', name: 'purchase-index', component: PurchasesIndex },
            { path: 'new', name: 'new-purchase', component: PurchasesNew, meta: { title: 'New' } },
            { path: 'view/:id', name: 'view-purchase', component: PurchasesView, meta: { title: 'View' } },
          ],
        },
        {
          path: 'site',
          component: RouteWrap,
          meta: { title: 'Site Settings' },
          children: [
            { path: '', name: 'site-index', component: SiteIndex },
            { path: 'home', name: 'page-home', component: SiteHome, meta: { title: 'Home Page' } },
            { path: 'contact', name: 'page-contact', component: SiteContact, meta: { title: 'Contact Page' } },
            { path: 'general', name: 'page-general', component: SiteGeneral, meta: { title: 'General Settings' } },
            { path: '/admin/page-builder/new', name: 'new-page', component: PageBuilderNew, meta: { title: 'New Page' } },
            { path: '/admin/page-builder/edit/:id', name: 'edit-page', component: PageBuilderEdit, meta: { title: 'Edit Page' } },
            { path: '/admin/page-builder/list', name: 'list-pages', component: PageBuilderList, meta: { title: 'Page List' } },
          ],
        },
        {
          path: 'users',
          component: RouteWrap,
          meta: { title: 'Users' },
          children: [
            { path: '', name: 'user-index', component: UsersIndex },
            { path: 'new', name: 'new-user', component: UsersNew, meta: { title: 'New' } },
            { path: 'edit/:id', name: 'edit-user', component: UsersEdit, meta: { title: 'Edit' } },
          ],
        },
      ],
    },

    { path: '/403', name: 'error-403', component: Error403, meta: { title: '403 Forbidden' } },
    { path: '/502', name: 'error-502', component: Error502, meta: { title: '502 Server Error' } },

    // demo pages
    { path: '/users', name: 'users', component: Users, meta: { auth: ['admin'] } },
    { path: '/tests', name: 'tests', component: Tests },
    { path: '/register', name: 'register', component: Register, meta: { auth: false } },
    { path: '/account', name: 'account', component: Account, meta: { auth: true } },

    { path: '*', name: 'error-404', component: Error404, meta: { title: '404 Not Found' } },
  ],
});

export default router;

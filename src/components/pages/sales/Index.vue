<template>
<page-tile title="Sales index">
  <ul>
    <li>
      <router-link :to="{name: 'new-sale'}" >
        new sale
      </router-link>
    </li>
    <li>
      <router-link :to="{name: 'view-sale', params: {id: 10}}" >
        view sale
      </router-link>
    </li>
    <li>
      <router-link :to="{name: 'new-purchase'}" >
        new purchase
      </router-link>
    </li>
    <li>
      <router-link :to="{name: 'view-purchase', params: {id: 10}}" >
        view purchase
      </router-link>
    </li>
    <li>
      <router-link :to="{name: 'new-contact'}" >
        new contact
      </router-link>
    </li>
    <li>
      <router-link :to="{name: 'edit-contact', params: {id: 10}}" >
        view contact
      </router-link>
    </li>
    <li>
      <router-link :to="{name: 'list-contacts'}" >
        list contacts
      </router-link>
    </li>
  </ul>

</page-tile>
</template>

<template>
<tile-container>
  <page-tile tile="Products index">
    <ul>
      <li><router-link :to="{title: 'products-index'}">Index</router-link></li>
      <li>
        <r-link to="edit-categories">Categories</r-link>
      </li>
      <li><router-link :to="{title: 'products-index'}">Index</router-link></li>
      <li><router-link :to="{title: 'products-index'}">Index</router-link></li>
      <li><router-link :to="{title: 'products-index'}">Index</router-link></li>
      <li>more?</li>
    </ul>
  </page-tile>
</tile-container>
</template>

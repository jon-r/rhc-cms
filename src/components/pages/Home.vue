<template>
  <div>
    <page-tile title="Search">
      <!-- todo mimic dashboard from database -->
      <ul>
        <li>RHC number</li>
        <li>Workshop number</li>
        <li>Name (to mimicing live search)</li>
        <li>invoice number</li>
        <li>purchase ref</li>
      </ul>
    </page-tile>
    <page-tile title="Links">
      <ul>
        <li><router-link :to="{name: 'products-index'}" >Products</router-link></li>
        <li><router-link :to="{name: 'sales-index'}" >Sales</router-link></li>
        <li><router-link :to="{name: 'new-product'}" >New RHC</router-link></li>
        <li><router-link :to="{name: 'new-workshop'}" >New Workshop</router-link></li>
        <li><router-link :to="{name: 'list-products'}" >Product Lists</router-link></li>
      </ul>
    </page-tile>
    <page-tile tile="Stats">
      <ul>
        <li>Shared Notes</li>
        <li>Private Notes??</li>
        <li>Popular items</li>
        <li>Low items</li>
        <li>Sitting about</li>
      </ul>
    </page-tile>
  </div>
</template>

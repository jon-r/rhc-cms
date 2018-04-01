<template>
  <div>
    <h1 class="title is-2">Main Menu</h1>
    <tile-container horizontal>
      <color-tile color="is-red" title="Red Hot Chilli Stock" class="is-8">
        <r-link to="edit-product" class="button is-large is-fullwidth margin-bottom is-dark">
          Browse Equipment
        </r-link>
        <r-link to="products-to-go" class="button is-medium is-fullwidth margin-bottom is-dark">
          Stock To Go Online
        </r-link>

        <div class="columns">
          <div class="column">
            <b-field>
              <b-input placeholder="RHC123, oven, lincat" type="search" expanded></b-input>
              <p class="control">
                <button class="button is-dark">Search</button>
              </p>
            </b-field>
            <r-link to="new-workshop" class="button margin-bottom is-fullwidth is-dark">
              New Stock
            </r-link>
            <r-link to="new-product" class="button is-fullwidth is-dark">
              New by RHC
            </r-link>
          </div>
          <div class="column">
            <r-link to="products-index" class="button is-fullwidth is-dark margin-bottom">
              To Print
            </r-link>
            <r-link to="edit-categories" class="button is-fullwidth is-dark">
              Categories
            </r-link>
          </div>
        </div>
      </color-tile>
      <color-tile title="Workshop" color="is-purple">

        <r-link to="products-index" class="button is-large is-fullwidth margin-bottom is-dark">
          Workshop
        </r-link>
        <r-link to="products-index" class="button is-medium is-fullwidth margin-bottom is-dark">
          Workshop To Do
        </r-link>

        <b-field>
          <b-input placeholder="1234, oven" type="search" expanded></b-input>
          <p class="control">
            <button class="button is-primary">Search</button>
          </p>
        </b-field>
      </color-tile>
    </tile-container>

    <tile-container horizontal>
      <color-tile title="Website" color="is-green">
        <button class="button is-medium is-fullwidth margin-bottom is-dark">Clear Cache</button>
        <r-link to="page-home" class="button is-medium is-fullwidth margin-bottom is-dark">
          Front Banner
        </r-link>
        <r-link to="site-index" class="button is-medium is-fullwidth margin-bottom is-dark">
          Pages
        </r-link>
        <r-link to="page-general" class="button is-medium is-fullwidth margin-bottom is-dark">
          Site Settings
        </r-link>
      </color-tile>
      <color-tile title="Sales (todo)" color="is-blue">
        <ul>
          <li>RHC number</li>
          <li>Workshop number</li>
          <li>Name (to mimicing live search)</li>
          <li>invoice number</li>
          <li>purchase ref</li>
        </ul>
      </color-tile>
      <color-tile title="Contacts (todo)" color="is-amber">
        <ul>
          <li>
            <router-link :to="{name: 'products-index'}">Products</router-link>
          </li>
          <li>
            <router-link :to="{name: 'sales-index'}">Sales</router-link>
          </li>
          <li>
            <router-link :to="{name: 'new-product'}">New RHC</router-link>
          </li>
          <li>
            <router-link :to="{name: 'new-workshop'}">New Workshop</router-link>
          </li>
        </ul>
        <br>
        <em>Stats</em>
        <ul>
          <li>Shared Notes</li>
          <li>Private Notes??</li>
          <li>Popular items</li>
          <li>Low items</li>
          <li>Sitting about</li>
        </ul>
      </color-tile>
    </tile-container>
  </div>
</template>

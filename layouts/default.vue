<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="open"
      class="primary"
      :clipped="true"
      :permanent="permanent"
      app
      stateless
    >
      <v-list
        v-for="link in links"
        :key="link.title"
      >
        <v-list-tile
          @click="goToPage(link.route)"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ link.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group
          v-if="link.children"
          sub-group
          :value="subGroup"
        >
          <v-list-tile
            v-for="child in link.children"
            :key="child.title"
            class="ml-5 pl-2"
            @click="goToPage(child.route)"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ child.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      :clipped-left="true"
      app
      color="primary"
    >
      <v-list>
        <v-list-tile>
          <v-toolbar-side-icon
            @click.stop="toggleDrawer"
          />
          <v-list-tile-title class="title">
            Children of Thanos
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-content>
      <nuxt />
    </v-content>

    <v-footer
      class="pa-3 primary"
      app
    >
      <v-spacer />
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Home',
          icon: 'home',
          route: '/'
        },
        {
          title: 'Constitution',
          icon: 'description',
          route: '/constitution',
          children: [
            {
              title: 'League Overview',
              route: '/constitution#league-overview'
            },
            {
              title: 'League Financing',
              route: '/constitution#league-financing'
            },
            {
              title: 'League Setup and Competition',
              route: '/constitution#league-setup'
            },
            {
              title: 'Rosters and Lineups',
              route: '/constitution#rosters-and-lineups'
            },
            {
              title: 'Scoring System',
              route: '/constitution#scoring-system'
            },
            {
              title: 'Offseason Activities',
              route: '/constitution#offseason-activities'
            },
            {
              title: 'Amendments',
              route: '/constitution#amendments'
            }
          ]
        }
      ],
      open: true,
      permanent: true,
      subGroup: false
    }
  },
  methods: {
    goToPage(page) {
      if (page.startsWith('/constitution')) {
        if (page === '/constitution') this.subGroup = !this.subGroup
        this.$router.push(page)
      } else {
        if (this.subGroup) this.subGroup = !this.subGroup
        this.$router.push(page)
      }
    },
    toggleDrawer() {
      if (this.permanent) {
        this.permanent = !this.permanent
      } else {
        // normal drawer
        this.open = !this.open
      }
    }
  }
}
</script>

<style>
.v-list.theme--dark {
  background-color: #673ab7;
}

.v-list__group__header {
  display: none;
}
</style>

<template>
  <v-app>
    <div class="layout ">
      <navbar></navbar>
      <div class="content p-1">
        <router-view />
      </div>
      <!-- <footer1></footer1> -->
    </div>
  </v-app>
</template>

<script>

import navbar from "@/components/navbar";

// import footer1 from "@/components/footer";

export default {
  name: "Defoult",
  components: {
    navbar,
    // footer1,
  },
};
</script>

<style scoped lang="scss">



.layout {
  height: 100%;
}

// Small screens
@media only screen and (max-width: 768px) {
  .layout {
    margin-right: 0;
    margin-left: 0;
  }
}

// Large screens
// @media only screen and (min-width: 769px) {
//   .layout {
//     margin-right: 40px;
//     margin-left: 40px;
//   }
// }

.content {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  &::-webkit-scrollbar-track {
    background: ghostwhite;
  }
  &::-webkit-scrollbar-thumb {
    background: hsl(0, 0%, 55%);
  }
}
</style>

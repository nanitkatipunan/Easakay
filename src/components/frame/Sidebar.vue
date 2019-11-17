<template>
  <sidebar-menu :menu="menu" />
</template>
 <style scoped >
.v-sidebar-menu{
  height: 94%;
  margin-top: 56px;
}
 
 </style>
 
<script>
export default {
   name:'side',
  data() {
    return {
      menu: [
        {
          header: true,
          title: 'Main Navigation',
          hiddenOnCollapse: true
        },
        {
          href: "/Dashboard",
          title: "Dashboard",
          icon: 'fas fa-tachometer-alt',
        },
        {
          href: "/Subjects",
          title: "Bus Schedule",
          icon: 'fas fa-book',
        },
        {
          href: "/Timeline",
          title: "Track Location",
          icon: 'fas fa-book',
        },
        {
          href: "/PersonalInfo",
          title: "Personal Info",
          icon: 'fas fa-user',
        },
        {
          href: "/confirmLogout",
          title: "Logout",
          icon: 'fas fa-sign-out-alt',
        }
      ]
    };
  }
};
</script> 
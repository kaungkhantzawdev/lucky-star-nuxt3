<template>
    <aside class="left-sidebar" data-sidebarbg="skin6" style="overflow: auto">
            <!-- Sidebar scroll-->
            <div class="scroll-sidebar" data-sidebarbg="skin6">
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                    
                        <SidebarItem link="/" icon-name="home" item-name="Dashboard"/>
                        <SidebarDivider />
                        <SidebarTitle title-name="Applications"/>
                        <SidebarItem link="/avatars" icon-name="account_circle" item-name="Avatars"/>
                        <SidebarItem link="/categories" icon-name="category" item-name="Categories"/>
                        <SidebarItem link="/lucky-draw" icon-name="shapes" item-name="Lucky draw"/>
                        <SidebarItem link="/products" icon-name="shopping_bag" item-name="Products"/>
                        <SidebarItem link="/media" icon-name="perm_media" item-name="Media"/>
                        <SidebarItem link="/result" icon-name="receipt_long" item-name="Result"/>
                        <SidebarItem link="/shops" icon-name="store" item-name="Shops"/>
                        <SidebarItem link="/tickets" icon-name="sell" item-name="Tickets"/>
                        <SidebarItem link="/users" icon-name="group" item-name="Users"/>

                        <SidebarDivider />

                        <SidebarTitle title-name="Authentication"/>

                        <SidebarItem link="/auth/login" icon-name="login" item-name="Login"/>

                        <SidebarItem link="/auth/register" icon-name="person" item-name="Register"/>

                        <SidebarDivider />

                        <SidebarTitle title-name="Extra"/>

                        <SidebarItem link="/auth/login" icon-name="edit_note" item-name="Document"/>

                        <SidebarItem link="/auth/login" icon-name="logout" item-name="Logout"/>

                    </ul>
                </nav>
                <!-- End Sidebar navigation -->
            </div>
            <!-- End Sidebar scroll-->
        </aside>
   
</template>




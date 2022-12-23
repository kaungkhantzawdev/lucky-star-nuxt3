<template>
    <aside class="left-sidebar" data-sidebarbg="skin6">
            <!-- Sidebar scroll-->
            <div class="scroll-sidebar" data-sidebarbg="skin6">
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                        <li class="sidebar-item">
                            <NuxtLink class="sidebar-link sidebar-link" to="/"
                                aria-expanded="false">
                                <span class="material-symbols-outlined" style="margin-right:5px; margin-bottom: 3px">
                                    home
                                </span>
                                <span class="hide-menu">Dashboard</span>
                            </NuxtLink>
                        </li>
                        <li class="list-divider"></li>
                        <li class="nav-small-cap"><span class="hide-menu">Applications</span></li>
                        <li class="sidebar-item">
                            <NuxtLink class="sidebar-link sidebar-link" to="/categories"
                                aria-expanded="false">
                                <span class="material-symbols-outlined"  style="margin-right:5px;  margin-bottom: 3px">
                                category
                                </span>
                                <span
                                    class="hide-menu">Categories</span>
                            </NuxtLink>
                        </li>
                        <li class="sidebar-item">
                            <NuxtLink class="sidebar-link sidebar-link" to="/products"
                                aria-expanded="false">
                                <span class="material-symbols-outlined"  style="margin-right:5px;  margin-bottom: 3px">
                                storefront
                                </span>
                                <span
                                    class="hide-menu">Products</span>
                            </NuxtLink>
                        </li>
                        <li class="sidebar-item">
                             <NuxtLink class="sidebar-link" to="/tickets"
                                aria-expanded="false">
                                <span class="material-symbols-outlined"  style="margin-right:5px;">
                                sell
                                </span>
                                <span
                                    class="hide-menu">Tickets
                                </span>
                            </NuxtLink>
                        </li>
                        <li class="sidebar-item"> 
                            <NuxtLink class="sidebar-link sidebar-link" to="/users"
                                aria-expanded="false">
                                <span class="material-symbols-outlined"  style="margin-right:5px;">
                                group
                                </span>
                                <span
                                    class="hide-menu">Users</span>
                            </NuxtLink>
                        </li>

                        <li class="list-divider"></li>

                        <li class="nav-small-cap"><span class="hide-menu">Authentication</span></li>

                        <li class="sidebar-item"> 
                            <NuxtLink class="sidebar-link sidebar-link" to="/auth/login"
                                aria-expanded="false">
                                <span class="material-symbols-outlined"  style="margin-right:5px;  margin-bottom: 3px">
                                login
                                </span>
                                <span
                                    class="hide-menu">Login</span>
                            </NuxtLink>
                        </li>
                        <li class="sidebar-item">
                            <NuxtLink class="sidebar-link sidebar-link" to="/auth/register"
                                aria-expanded="false">
                                <span class="material-symbols-outlined"  style="margin-right:5px;  margin-bottom: 3px">
                                    person
                                </span>
                                <span
                                    class="hide-menu">Register</span>
                            </NuxtLink>
                        </li>

                    
                        <li class="list-divider"></li>
                        <li class="nav-small-cap"><span class="hide-menu">Extra</span></li>
                        <li class="sidebar-item"> 
                            <NuxtLink class="sidebar-link sidebar-link" to="/auth/login"
                                aria-expanded="false">
                                <span class="material-symbols-outlined"  style="margin-right:5px;  margin-bottom: 3px">
                                edit_note
                                </span>
                                <span
                                    class="hide-menu">Logout</span>
                            </NuxtLink>
                        </li>
                        <li class="sidebar-item"> 
                            <NuxtLink class="sidebar-link sidebar-link" to="/auth/login"
                                aria-expanded="false">
                                <span class="material-symbols-outlined"  style="margin-right:5px;  margin-bottom: 3px">
                                logout
                                </span>
                                <span
                                    class="hide-menu">Logout</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
                <!-- End Sidebar navigation -->
            </div>
            <!-- End Sidebar scroll-->
        </aside>
</template>
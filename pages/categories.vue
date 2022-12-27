<template>
    <div class="page-breadcrumb">
        <div class="row">
            <ResuablesBreadCrumb title="Categories" child="categories"/>
            <div class="col-5 align-self-center">
                <div class="customize-input float-right">
                    <select class="custom-select custom-select-set form-control bg-white border-0 custom-shadow custom-radius">
                        <option selected>Aug 19</option>
                        <option value="1">July 19</option>
                        <option value="2">Jun 19</option>
                    </select>
                </div>
            </div>
        </div>
    </div>

   <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Add Categories</h4>
                            <form class="mt-3">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="nametext" aria-describedby="name" placeholder="Name">
                                    <small id="name" class="form-text text-muted">Helper Text</small>
                                </div>
                                <button type="button" class="btn waves-effect waves-light btn-success d-inline-block">Add Categorie</button>
                            </form>
                    </div>
                </div>
            </div>
            <!-- categories list component -->
            <CategoriesLists />
        </div>
   </div>
</template>


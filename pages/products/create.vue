<template>
   <div class="page-breadcrumb">
    <div class="row">
        <div class="col-7 align-self-center mb-4 pb-2">
            <h4 class="page-title text-truncate text-dark font-weight-medium mb-1">Create Product</h4>
            <div class="d-flex align-items-center">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb m-0 p-0">
                        <li class="breadcrumb-item"><a href="index.html" class="text-muted">Apps</a></li>
                        <li class="breadcrumb-item text-muted active" aria-current="page">Products</li>
                        <li class="breadcrumb-item text-muted active" aria-current="page">Create</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-lg-8">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Create Product</h4>
                    <h6 class="card-subtitle">
                        all products management
                    </h6>
                    <form class="mt-3">
                        <div class="form-group">
                            <input type="text" class="form-control" id="nametext" aria-describedby="name" placeholder="Name">
                            <small id="name" class="form-text text-muted">Please, must be fill data</small>
                        </div>
                        <div class="form-group">
                            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected>Choose category</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <small id="name" class="form-text text-muted">Please, must be fill data</small>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group">
                                    <input type="number" class="form-control" id="nametext" aria-describedby="name" placeholder="Quantity">
                                    <small id="name" class="form-text text-muted">Please, must be fill data</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option selected>Choose Status</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <small id="name" class="form-text text-muted">Please, must be fill data</small>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="form-group">
                            <textarea class="form-control" rows="3" placeholder="Text Here..."></textarea>
                            <small id="textHelp" class="form-text text-muted">Helper Text</small>
                        </div> -->
                        <div class="form-group">
                            <QuillEditor theme="snow" placeholder="Write description ..."/>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn waves-effect waves-light btn-success d-inline-block">Create Product</button>
                        </div>
                    </form>
                </div>
            
            </div>
        </div>
        <div class="col-12 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Media</h4>
                    <h6 class="card-subtitle">
                        products create field
                    </h6>
                    <form class="mt-3">
                    <div class="form-group">
                        <div class="input-group mb-3">
                           
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile01">
                                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                            <button type="button" class="btn waves-effect waves-light btn-success d-inline-block">Upload Media</button>
                        </div>
                </form>
                </div>
            
            </div>

            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Media</h4>
                    <h6 class="card-subtitle">
                        products create field
                    </h6>
                    <div>
                        <img src="/vendor/images/logo-icon.png" class="my-2 mr-2" style="height: 200px;"/>
                        <img src="/vendor/images/logo-icon.png" class="my-2 mr-2" style="height: 200px;"/>

                    </div>
                </div>
            
            </div>
        </div>
        </div>
   </div>
   </div>
</template>
<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
defineComponent({
    QuillEditor
})
</script>
<template>
    <div class="container-fluid">
    <div class="col-12">
        <div class="card">
            <div class="card-body d-lg-flex alin-items-end justify-content-between">
                <div>
                    <h4 class="card-title">Products table</h4>
                    <h6 class="card-subtitle">
                        all products management
                    </h6>
                </div>
                <div class="d-md-flex aligin-items-center">
                    <form>
                        <div class="d-flex mr-3">
                            <input class="form-control" type="text" placeholder="Search product">
                            <button class="btn waves-effect waves-light btn-primary d-inline-block">search</button>
                        </div>
                    </form>
                    <NuxtLink to="/products/create">
                        <span class="mt-2 mt-lg-0 btn waves-effect waves-light btn-success d-inline-block">Create Product</span>
                    </NuxtLink>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-hover" style="border-bottom: 1px solid #e8eef3">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Created user name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Status</th>
                            <th scope="col">Created date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>13.4.2022</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>13.4.2022</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>13.4.2022</td>
                        </tr>
                    </tbody>
                </table>
               <div class="d-flex aligin-item-end justify-content-between">
                <div>
                    <p  style="margin: 25px;">Total product: 300</p>
                </div>
                <ul class="pagination" style="margin: 25px;">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
               </div>
            </div>
        </div>
    </div>
   </div>
</template>
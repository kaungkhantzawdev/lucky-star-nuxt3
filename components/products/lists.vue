<template>
    <div class="container-fluid">
    <div class="col-8">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Add Products</h4>
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
    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Products table</h4>
                <h6 class="card-subtitle">
                    all products management
                </h6>
            </div>
            <div class="table-responsive">
                <table class="table table-hover">
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
            </div>
        </div>
    </div>
   </div>
</template>
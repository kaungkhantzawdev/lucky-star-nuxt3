<template>
    <div class="col-12 col-lg-8">
        <div class="card">
            <div class="card-body  d-lg-flex alin-items-end justify-content-between">
                <div>
                    <h4 class="card-title">Categorie table</h4>
                    <h6 class="card-subtitle">
                        all categories management
                    </h6>
                </div>
                <div>
                    <form>
                        <div class="d-flex mr-3">
                            <input class="form-control" type="text" placeholder="Search product">
                            <button class="btn waves-effect waves-light btn-primary d-inline-block">search</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Parent</th>
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
                            <td>12.3.2019</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>12.3.2019</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>12.3.2019</td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex aligin-item-end justify-content-between">
                <div>
                    <p  style="margin: 25px;">Total categories: 300</p>
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
</template>
<template>
    <div class="page-breadcrumb">
        <div class="row">
            <ResuablesBreadCrumb title="Lucky Draw" child="lucky-draw" />

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

    <!-- list component -->
    <LuckyDrawLists />
</template>
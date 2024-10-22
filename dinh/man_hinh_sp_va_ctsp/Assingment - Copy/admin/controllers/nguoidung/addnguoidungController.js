window.addnguoidungController = function ($scope, $http, $location) {
    $scope.data = {
        hoten: "",
        tuoi: "",
        diachi: "",
        sodienthoai: "",
        vaitro: ""
    };

    var url = "http://localhost:3000/nguoidungs";
    $scope.save = function () {
        // checkEmptyThanhPho()
        if (checkEmpty() && checkEmptyThanhPho() && checkEmptyVaiTro) {
            let data = angular.copy($scope.data);
            $http.post(url, data)
                .then(function (response) {
                    alert("Thêm mới thành công!")
                    $location.path("/nguoidung");
                })
                .catch(function (error) {
                    alert("Thêm mới thất bại!")
                })
        }
    }
    $http
        .get("http://localhost:3000/thanhphos")
        .then(function (response) {
            $scope.listDemo = response.data;
            console.log(response.data)
        })
        .catch(function (error) {
            console.log("create failed");
        });
    // 
    function checkEmptyThanhPho() {
        $scope.checkthanhpho = $scope.data.diachi == "" ? true : false;
    }

    $http
        .get("http://localhost:3000/vaitro")
        .then(function (response) {
            $scope.listVaiTro = response.data;
            console.log(response.data)
        })
        .catch(function (error) {
            console.log("create failed");
        });
    // 
    function checkEmptyVaiTro() {
        $scope.checkvaitro = $scope.data.vaitro == "" ? true : false;
    }

    //validate
    $scope.validate = {
        hoten: false,
        tuoi: false,
        sodienthoai: false
    }

    //validate tuoi là số nguyên dương lon hon 0
    $scope.validatetuoiduong = false

    function checkEmpty() {
        $scope.validate.hoten = $scope.data.hoten == "" ? true : false
        $scope.validate.tuoi = $scope.data.tuoi == "" ? true : false
        $scope.validate.sodienthoai = $scope.data.sodienthoai == "" ? true : false
        $scope.checkthanhpho = $scope.data.diachi == "" ? true : false;
        $scope.checkvaitro = $scope.data.vaitro == "" ? true : false;
        if (
            !$scope.validate.hoten && !$scope.validate.tuoi && !$scope.checkthanhpho
            && !$scope.checkvaitro && !$scope.validate.sodienthoai
        ) {
            return true
        } else {
            return false
        }
    }

    function checktuoi() {
        if (!isNaN($scope.data.tuoi) && $scope.data.tuoi > 0) {
            $scope.validatetuoiduong = true
            return true
        } else {
            $scope.validatetuoiduong = false
            return false
        }
    }
};
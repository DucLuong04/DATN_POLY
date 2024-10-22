window.addsanphamController = function ($scope, $http, $location) {
    $scope.data = {
        hinh: "",
        ten: "",
        soluong: "",
        gia: "",
        mota: ""
    };

    var url = "http://localhost:3000/sanphams";
    $scope.save = function () {
        if (checkEmpty() && checkgia() && checksoluong()) {
            let data = angular.copy($scope.data);
            $http.post(url, data)
                .then(function (response) {
                    alert("Thêm mới thành công!")
                    $location.path("/sanpham")
                })
                .catch(function (error) {
                    alert("Thêm mới thất bại!")
                })

        }
    }

    //validate
    $scope.validate = {
        hinh: false,
        ten: false,
        soluong: false,
        gia: false,
        mota: false
    }
    function checkEmpty() {
        $scope.validate.hinh = $scope.data.hinh == "" ? true : false
        $scope.validate.ten = $scope.data.ten == "" ? true : false
        $scope.validate.soluong = $scope.data.soluong == "" ? true : false
        $scope.validate.gia = $scope.data.gia == "" ? true : false
        $scope.validate.mota = $scope.data.mota == "" ? true : false
        if (
            !$scope.validate.hinh && !$scope.validate.ten && !$scope.validate.soluong
            && !$scope.validate.gia && !$scope.validate.mota
        ) {
            return true
        } else {
            return false
        }
    }

    // validate gia lon hon 0
    $scope.validategiaduong = false
    function checkgia() {
        if (parseInt($scope.data.gia) > 0) {
            $scope.validategiaduong = false
            return true
        } else {
            $scope.validategiaduong = true
            return false
        }
    }

    // validate so luong lon hon 0
    $scope.validatesoluongduong = false
    function checksoluong() {
        if (parseInt($scope.data.gia) > 0) {
            $scope.validatesoluongduong = false
            return true
        } else {
            $scope.validatesoluongduong = true
            return false
        }
    }
}
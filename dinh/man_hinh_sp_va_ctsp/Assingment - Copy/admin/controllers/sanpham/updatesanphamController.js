window.updatesanphamController = function ($scope, $http, $location, $routeParams) {
    var url = "http://localhost:3000/sanphams"
    var urlGetOne = url + "/" + $routeParams.id

    $scope.updateSP = {
        hinh: "",
        ten: "",
        soluong: "",
        gia: "",
        mota: ""
    }

    $http.get(urlGetOne)
        .then(function (response) {
            $scope.updateSP = response.data
            console.log(response.data)
        })
        .catch(function (error) {
            alert("Lỗi truy vấn dữ liệu!")
        })

    $scope.update = function () {
        let data = angular.copy($scope.updateSP)
        $http.patch(urlGetOne, data)
            .then(function (response) {
                alert("Sửa thành công!")
                $location.path("/sanpham")
            })
            .catch(function (error) {
                alert("Sửa ko thành công!")
            })

    }
}
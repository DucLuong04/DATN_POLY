window.updatenguoidungController = function ($scope, $http, $location, $routeParams) {
    var url = "http://localhost:3000/nguoidungs"
    var urlGetOne = url + "/" + $routeParams.id

    $scope.updateND = {
        hoten: "",
        tuoi: "",
        diachi: "",
        sodienthoai: "",
        vaitro: ""
    };

    $http.get(urlGetOne)
        .then(function (response) {
            $scope.updateND = response.data
        })
        .catch(function (error) {
            alert("Lỗi truy vấn dữ liệu!")
        });

    $scope.update = function () {
        let data = angular.copy($scope.updateND)
        $http.patch(urlGetOne, data)
            .then(function (response) {
                alert("Sửa thành công!")
                $location.path("/nguoidung")
            })
            .catch(function (error) {
                alert("Sửa ko thành công!")
            })
    };

    $http
        .get("http://localhost:3000/thanhphos")
        .then(function (response) {
            $scope.listThanhPho = response.data;
        })
        .catch(function (error) {
            console.log("create failed");
        });

    $http
        .get("http://localhost:3000/vaitro")
        .then(function (response) {
            $scope.listVaiTro = response.data;
        })
        .catch(function (error) {
            console.log("create failed");
        });
}
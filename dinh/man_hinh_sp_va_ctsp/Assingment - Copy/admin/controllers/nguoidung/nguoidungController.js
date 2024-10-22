window.nguoidungController = function ($scope, $http) {
    var url = "http://localhost:3000/nguoidungs"
    $scope.listnguoidung = undefined;
    $http.get(url)
        .then(function (response) {
            $scope.listnguoidung = response.data
            console.log("Đã gọi được API!")
        })
        .catch(function (error) {
            console.log("Ko gọi được API!")
        })


    $scope.delete = function (id) {
        let check = confirm("Bạn có muốn xóa kay ko!");
        if (check) {
            let api = url + "/" + id
            $http.delete(api)
                .then(function (response) {
                    alert("Xóa thành công!")
                })
                .catch(function (error) {
                    alert("Bạn đã hủy xóa!")
                });
        }
    }

    $scope.listthanhpho = [];
    $http.get("http://localhost:3000/thanhphos")
        .then(function (response) {
            $scope.listthanhpho = response.data
        })
        .catch(function (error) {
            console.log("Ko gọi được thành phố!")
        })

    $scope.listVaiTro = [];
    $http.get("http://localhost:3000/vaitro")
        .then(function (response) {
            $scope.listVaiTro = response.data;
        })
        .catch(function (error) {
            console.log("create failed");
        });
}
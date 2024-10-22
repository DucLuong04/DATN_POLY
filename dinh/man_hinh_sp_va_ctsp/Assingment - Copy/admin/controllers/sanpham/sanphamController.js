window.sanphamController = function ($scope, $http) {
    var url = "http://localhost:3000/sanphams";
    $scope.listsanpham = undefined;
    $http.get(url)
        .then(function (response) {
            $scope.listsanpham = response.data
            console.log("Đã gọi được API!")
        })
        .catch(function (error) {
            console.log("Ko gọi được API!")
        });


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
}
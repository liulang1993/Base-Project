angular.module('myApp',[])
		.controller('signUpForm',function($scope){
			$scope.userdata = {}
			$scope.submitForm = function(){
				if ($scope.signUpForm.$invalid) {
					alert('请检查你的信息')
				}else{
					alert('注册成功')
				}
			}
		})
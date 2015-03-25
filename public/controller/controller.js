function AppController($scope,$http)
{
	
	$scope.phone = /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/;
	var loadPage = function(){
	$http.get("/contactList").success(function(response){
				$scope.contactList = response;
				$scope.editContact = "";
			});
	};
	
	loadPage();
	
	$scope.addContact = function(){
		$http.post("/addContact",$scope.editContact).success(function(response){
					console.log(response);
					loadPage();
				});
	};
	
	
	/*
	//to send mutliple data in post request
	var checkMultidataReq = $http({
		
		method:'post',
		url:'/checkMutlidataReq',
		data:{
			name:"Aviansh",
			company:"SJSU",
			Phone:7789655
		}
	});
	
	checkMultidataReq.success(function(response)
			{
				console.log(response);
			});
	*/
}
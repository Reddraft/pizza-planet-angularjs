app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95
    }    
  ];

    $scope.mains = [
    {
      name: 'Margherita',
      description: 'Marianara Sauce, Mozzarella, fresh Basil',
      price: 15.50
    },
    {
      name: 'Pepperoni',
      description: 'Served with marinara sauce.',
      price: 9.90
    },
    {
      name: 'Rustica',
      description: 'Grilled bread garlic, tomatoes, olive oil',
      price: 12.00
    }    
  ];

    $scope.extras = [
    {
      name: 'Breadsticks',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Soup of the Day',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Buffalo Wings',
      description: 'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95
    }    
  ];

}]);
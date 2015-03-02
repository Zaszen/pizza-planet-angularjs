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
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];

  $scope.mains = [
    {
      name: 'Margherita',
      description: 'Marinara sauce, tomatoes, basil, balsmaic glaze.',
      price: 6.95
    },
    {
      name: 'Pepperoni',
      description: 'Pepperoni with marinara sauce.',
      price: 7.95
    },
    {
      name: 'Rustica',
      description: 'Marinara sauce, bread garlic, tomatoes, olive oil.',
      price: 8.95
    }
  ];

  $scope.extras = [
    {
      name: 'Breadsticks',
      description: 'More Marinara sauce.',
      price: 4.95
    },
    {
      name: 'Soup of the Day',
      description: 'Take a chance.',
      price: 4.95
    },
    {
      name: 'Buffalo Wings',
      description: 'Feel the power of wings.',
      price: 6.95
    }
  ];

}]);
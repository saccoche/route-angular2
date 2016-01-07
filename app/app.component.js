System.register(['angular2/core', "./todo.service", './todo.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_service_1, todo_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todo_component_1_1) {
                todo_component_1 = todo_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_todoService) {
                    this._todoService = _todoService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._todoService.getTodos()
                        .then(function (todoList) { return _this.initList(todoList); });
                };
                AppComponent.prototype.initList = function (aTodoList) {
                    this.todoList = aTodoList;
                    this.refreshCounter();
                };
                AppComponent.prototype.addTodo = function () {
                    this.todoList.push({ "text": "", "done": false });
                    this.refreshCounter();
                };
                AppComponent.prototype.refreshCounter = function () {
                    this.cpt = this.todoList.filter(function (todo) { return !todo.done; }).length;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '/app/templates/app.template.html',
                        providers: [todo_service_1.TodoService],
                        directives: [todo_component_1.TodoComponent],
                        styles: ['.footer{font-variant: small-caps;font-size: 10;}',],
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
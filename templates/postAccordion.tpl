{{#users}}
<div class="panel panel-default panel-accordion">
    <div class="panel-heading user-title">
        <h6 class="panel-title">User {{id}}
        <i class="glyphicon glyphicon-chevron-down animated pull-right"></i></h6>
    </div>
    <div class="panel-body">
        <ul class="list-group">
            {{#posts}}
            <li class="list-group-item">{{title}}</li>
            {{/posts}}
        </ul>
    </div>
</div>
{{/users}}
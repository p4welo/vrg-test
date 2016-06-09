<!--<table class="table table-borderless table-striped">
    <tbody>
    {{#items}}
    <tr>
        <td class="text-center">User {{userId}}</td>
        <td>
            <em>{{title}}</em>
        </td>
    </tr>
    <tr>
        <td>
            <img class="media-object img-circle" src="https://api.adorable.io/avatars/48/{{userId}}.png" alt="avatar">
        </td>
        <td>
            {{body}}
        </td>
    </tr>
    {{/items}}
    </tbody>
</table>-->

<div class="panel panel-default panel-posts">
    <div class="panel-body">
        <ul class="media-list">
            {{#items}}
            <li class="media">
                <div class="media-left media-middle text-center">
                    <img src="https://api.adorable.io/avatars/48/{{userId}}.png" class="img-circle" alt="">
                    <span class="text-muted">User {{userId}}</span>
                </div>

                <div class="media-body">
                    <div class="media-heading">{{title}}</div>
                    <span class="text-muted">{{body}}</span>
                </div>

            </li>
            {{/items}}
        </ul>
    </div>
</div>
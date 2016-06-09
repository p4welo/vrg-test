<div class="panel panel-default panel-posts">
    <div class="panel-body">
        <ul class="media-list">
            {{#items}}
            <li class="media">
                <div class="media-left media-middle text-center">
                    <img src="https://api.adorable.io/avatars/48/{{userId}}.png" class="img-circle" alt="avatar">
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
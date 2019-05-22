$(document).ready(function () {
    let addButton = $('.add-button');
    let field = $('.add-field');
    let tasks = $('.tasks'); 

    // ass task
    addButton.click(function () {
        let elem = `<li class="task">
                        <div class="task-checked col-1">
                            <input type="checkbox" name="" id="">
                        </div>
                        <div class="task-text col-2">${field.val()}</div>
                        <div class="task-remove col-3"></div>
                    </li>`;
        tasks.append(elem);
        field.val("");
    });

    // remove task
    // let removeBtns = $('.task-remove');

    // tasks.click(function () { 
    //     $(this).parent().remove();
    // });

    tasks.on('click', '.task-remove', function () {
        $(this).parent().remove();
    });


    //checked
    // let checkboxes = $('.task-checked input');
    // checkboxes.change(function () {
    //     $(this).parent().next().toggleClass('checked');
    // });

    tasks.on('click', '.task-checked input', function () {
        $(this).parent().next().toggleClass('checked');
    });

    // sortable

    $('#tasks-list').sortable();
    $(".todo-list").draggable();
});
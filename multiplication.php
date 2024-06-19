<?php
function buildMultiplicationTable($size) {
    ?>
        <div class = "table">
        <table>
    <?php
    // for loop
    for ($row = 1; $row <= $size; $row++) {
        ?>
            <tr>
        <?php

        for ($col = 1; $col <= $size; $col++) {
            $result = $row * $col;
            ?>
                <td> 
                    <?= $result; ?>
                </td>
            <?php
        }
        
        ?> </tr> <?php
    }
    ?> 
        </table>  
        </div>
    <?php
}
     ?>
    <button onclick= "window.location = 'index.php'">&larr;Back</button>
    <br><br>
    <?php
?>
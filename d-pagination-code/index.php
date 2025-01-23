<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link
        rel="stylesheet"
        href="assets/bootstrap-4.3.1-dist/css/bootstrap.min.css" />
</head>

<body>

    <table class="table table-bordered">
        <thead>
            <th>id</th>
            <th>age</th>
            <th>name</th>
            <th>gender</th>
            <th>company</th>
            <th>email</th>
            <th>phone</th>
            <th>address</th>
        </thead>
        <tbody>
            <?php
            $data = file_get_contents("./assets/data.json");
            $json_data = json_decode($data, true);

            foreach ($json_data as $row) {
                echo "
<tr>
    <td>{$row["id"]}</td>
    <td>{$row["age"]}</td>
    <td>{$row["name"]}</td>
    <td>{$row["gender"]}</td>
    <td>{$row["company"]}</td>
    <td>{$row["email"]}</td>
    <td>{$row["phone"]}</td>
    <td>{$row["address"]}</td>
</tr>
";
            }
            ?>


        </tbody>
    </table>
</body>

</html>
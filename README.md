# node-postgres-rest
Test Poweshell Jenkins API


<!-- Jenkins Powershell GET -->
Invoke-WebRequest -Uri http://localhost:3000/users -Method GET -UseBasicParsing

<!-- Jenkins Powershell POST -->
$postParams = @{name="${ENV:username}";email="${ENV:email}"}
Invoke-WebRequest -Uri http://localhost:3000/users -Method POST -Body $postParams -UseBasicParsing


<!-- Jenkins Powershell PUT -->
$putParams = @{name="${ENV:username}";email="${ENV:email}"}
Invoke-WebRequest -Uri http://localhost:3000/users/$ENV:id} -Method PUT -Body $putParams -UseBasicParsing

<!-- # Jenkins Powershell DELETE -->
Invoke-WebRequest -Uri http://localhost:3000/users/$ENV:id} -Method DELETE -UseBasicParsing



<!-- # Jenkins -->
switch ( $ENV:action ) {
        'GET'   { 
<!-- # Jenkins Powershell GET  -->
           Invoke-WebRequest -Uri http://localhost:3000/users -Method GET -UseBasicParsing;
           break   
         }
        'POST'  { 
<!-- # Jenkins Powershell POST  -->
            $postParams = @{name="${ENV:name}";email="${ENV:email}"}
            Invoke-WebRequest -Uri http://localhost:3000/users -Method POST -Body $postParams -UseBasicParsing;
            break
         }
        'PUT'   { 
<!-- # Jenkins Powershell PUT  -->
            $putParams = @{name="${ENV:name}";email="${ENV:email}"}
            Invoke-WebRequest -Uri http://localhost:3000/users/${ENV:id} -Method PUT -Body $putParams -UseBasicParsing; 
            break
         }
        'DELETE' {
<!-- # Jenkins Powershell DELETE  -->
           	Invoke-WebRequest -Uri http://localhost:3000/users/${ENV:id} -Method DELETE -UseBasicParsing; 
                break
        }
}



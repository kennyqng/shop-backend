

## <span style="color:blue">Reference</span>


- [User Route (/api/user)](#uuseru)
	- [register](#register)
	- [login](#login)
## <u><span style="color:orange">User</span></u>
### Register
> Usage: Register new user for an account
>
> Route: /api/user/register
>
> Required parameters: All parameters are required
>	- firstName: user first name
>	- lastName: user last name 
> - email: email address
> - password: password no limit for now
> 
> Return: 
> - Success: status code 200;
>
> - Error: status code 500;
>	
>	 
### Login 
> Usage login using email and password
>
> Route: /api/user/login
>
> Require: 
>	 -email: user email
>	 -password: user password
> 
> Return:
> - Success: status code 200



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
>		- msg: "User added."
> - Error:
>		- Status Code 400	- Error with database.
>			- Duplicate Email:
>				- msg: "Duplication of email"
>				-	keyValue: {{email: value }} - keyvalue that causes the error;
>		- status code 422
>			- msg - "${parameter} is required.": one or more parameters are missing.
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

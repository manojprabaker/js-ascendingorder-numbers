var a=12,b=4,c=8;

if((a>c)&&(a>b))
{
	if(b>c)
	{
		console.log("ascending order is " + c + "," + b + "," + a);
	}
	else
	{
		console.log("ascending order is " + b + "," + c+ "," +a );
	}
}

if((b>a)&&(b>c))
{
	if(a>c)
	{
		console.log("ascending order is " + c + "," + a + "," + b);
	}
	else
	{
		console.log("ascending order is " + a + "," + c + "," + b );
	}
}

if((c>a)&&(c>b))
{
	if(b>a)
	{
		console.log("ascending order is " + b + "," + a + "," + c);
	}
	else
	{
		console.log("ascending order is " + a + "," + b + "," + c );
	}
}
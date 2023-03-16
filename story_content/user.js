function ExecuteScript(strId)
{
  switch (strId)
  {
      case "631NCfmd4Qv":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyFltUor6XcdzyFyCo-x4j2oyJcvaS7d9ujaRdh4NyVtj3lZQY-pST4YM9zJwzwzapu/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}


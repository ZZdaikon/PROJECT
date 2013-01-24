#pragma strict

function Start () {
}

function Update () {
	transform.position.x +=
	Input.GetAxis("Horizontal") * (30.0 * Time.deltaTime);
}
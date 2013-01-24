#pragma strict

private var goalFlag : boolean;

function Start () {
	goalFlag = false;
}

function Update (other : Collider) {
	if (other.gameObject.tag.Equals("PlayerBallTag")) {
	goalFlag = true;
	}
}
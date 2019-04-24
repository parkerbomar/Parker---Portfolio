<?php	
	if(empty($_POST['name_9381']) && strlen($_POST['name_9381']) == 0 || empty($_POST['email_9381']) && strlen($_POST['email_9381']) == 0 || empty($_POST['message_9381']) && strlen($_POST['message_9381']) == 0)
	{
		return false;
	}
	
	$name_9381 = $_POST['name_9381'];
	$email_9381 = $_POST['email_9381'];
	$message_9381 = $_POST['message_9381'];
	$optin_9381 = $_POST['optin_9381'];
	
	$to = 'receiver@yoursite.com'; // Email submissions are sent to this email

	// Create email	
	$email_subject = "Message from a Blocs website.";
	$email_body = "You have received a new message. \n\n".
				  "Name_9381: $name_9381 \nEmail_9381: $email_9381 \nMessage_9381: $message_9381 \nOptin_9381: $optin_9381 \n";
	$headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=UTF-8\r\n";	
	$headers .= "From: contact@yoursite.com\n";
	$headers .= "Reply-To: $email_9381";	
	
	mail($to,$email_subject,$email_body,$headers); // Post message
	return true;			
?>
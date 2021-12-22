---
title: "Are You Taking Your Website Security Seriously?"
description: "Begin building your toolbox needed to keep your website secure with this dive into website security."
createdAt: 2015-05-03T15:14:20-04:00
tags:
	- Security
	- Best Practices
draft: false
---
The Internet wasn't built so it was easier for you to watch cat videos. The Internet is an apparatus, spearheading the connection revolution, where anyone with a laptop or smartphone is connected to everyone else with just a few clicks. These conveniences wield great power, and with that, great responsibility. This responsibility is to protect our own, as well as our customer's, information.

Without any security measures in place, private or confidential information can be viewed, intercepted, and even stolen. Depending on the intent of the intrusion, this can range from market research to identity theft.

## Tightening Up Security

To give you a better idea of what to consider on your current site, we rounded up some things to look out for.

### Form Validation

Form validation should always be done - on both the browser side and the server side. The browser side handles simpler errors, like making sure the required fields are filled in or the minimal requirements of a field are met. It can also be more complex, as in assuring a phone number is formatted correctly or is valid for the specific countries that are deemed acceptable. Unfortunately, there is a way around these so that the server side validation will run another layer of validation. The server side validation could check for malicious code attempting to be inserted into the database or could cause some undesirable results in your website.

Some other layers to your form validation include…

* **A honeypot.** The general approach to a honeypot is to add an additional field to your form that could be read by spambots and a legitimate inclusion to the form. However, this field would be hidden from the users of the site. Best practice is to ensure that your prevention techniques don't interfere with the user filling out your form as this may decrease lead conversions. From there, if the form is submitted and a value is entered into the honeypot, it is flagged as spam and your form validation wouldn't send that data to the database. Instead, it is suggested that you capture the IP Address of the "user" in a log file so that it can be blacklisted if recognized as a spambot.

* **Error messages.** How you reveal these to users is an important piece of your website's security when validating a form. The language used in communicating errors could potentially provide attackers with valuable information to help them gain access to sensitive data. For example, if a user incorrectly inputs their password into a form, you should display a generic message, such as "Incorrect username or password." By not specifying that the user got half the information correct, this will eliminate the attacker's ability to concentrate on the other field.

Speaking of login information, this would be a perfect time to segway into our next section…

### Passwords

Despite the general population's cavalier attitude toward password security, it should be taken seriously at all times, and you should always take the necessary precautions.

#### Password Selection

It's a fair assumption that everyone knows they should use complex passwords. The concept of a password lends itself to basic knowledge - but that doesn't mean that people always follow this rule. It's crucial to use strong passwords for your servers and website admin sections, but equally important to require good password practices for your users. Remember - you're only looking out for their best interest.

Most users find it inconvenient when websites enforce best practices for password selection. Sorry, but marketing123 is not an acceptable password by any stretch of the imagination. Enforcing password requirements, such as a minimum of eight characters, including at least one uppercase letter and a number will help protect the user's information in the long run.

Check out what goes into creating a secure password here - particularly surrounding WordPress security.

#### Storing Users' Passwords

Users' passwords should always be encrypted using a one-way hashing algorithm such as SHA. SHA stands for Secure Hash Algorithm and was designed by the NSA. It's also a U.S. Federal Information Processing Standard. When you're using this method, you're authenticating users by comparing encrypted values.

As an extra layer of security, it's a good idea to salt the passwords as well. A salt is an additional input that uses a one-way hashing algorithm. This is to help defend against dictionary attacks versus a list of password hashes. It also helps protect against precomputed rainbow table attacks.

Using the aforementioned suggestions will help limit the potential damage caused by someone attempting to hack your system and steal passwords. The only way around this would be if someone ran a brute force attack, guessing every combination until they found a match. To avoid this, try to limit the amount of failed login attempts per IP Address - this would circle back to the form validation we discussed earlier.

Many [content management systems][CMS] provide user management with a lot of these security features built in - so be sure to consider these.

### File Uploads

Allowing users to upload files to your website is a huge security risk. However much you may want a user to upload an avatar, it opens the door for the malicious to compromise your servers. If there is an option to upload files to your website, you need to treat all files as potential threats.

Some common mistakes include…

* **Zero restrictions on uploaded files.** This could allow a would-be attacker to upload a PHP or .NET file with malicious code, leading to a compromised server.

* **Only checking the mime-type provided by the web browser being used.** A file upload form validation cannot depend on this value only. A vindictive user can easily upload files using a script or some other automated application that allows sending of HTTP POST requests, allowing he/she to send a fake mime-type.

If users are only able to upload images, developers usually open the file and check the header or, using functions, check the file size, to validate the image. Unfortunately, even these methods are not foolproof. A few risks are presented:

* The image's comments can be edited in image editor, where malicious code may be inserted. The image will return a valid header, bypassing the file size check as well, but the code inserted in the comments will still be executed.

* The _double extension image_. This is a malicious script that uses a double extension to mask itself as an acceptable file, such as _filename.php.bgm_. In this case, the PHP code will be executed as long as .bgm is not on the list of the recognized mime-types known to the server. There are multiple ways to attempt to thwart this attack, however many of those ways can be bypassed. The most effective way is to whitelist only the acceptable file extensions in your .htaccess file.

		deny from all
		<Files ~ "^\w\.(gif|jpe?g|png)$">
			order deny,allow
			allow from all
		</Files>

## The Top Security Threats
Now, let's look into some of the top security threats that exist for the average website and what you can do to avoid each.

### SQL Injection

SQL Injection (SQLI) was considered one of the top ten vulnerabilities to web applications in 2007 and 2010, according to the OWASP (Open Web Application Security Project). By 2013, SQLI was rated the number one attack on the OWASP top ten. SQL Injection is a technique that exploits security vulnerabilities in data-driven applications. Lending to its name, a resourceful attacker with malintent will try to "inject" harmful SQL code into your database, forcing it to run their code. This has the potential to ruin the database and even extract sensitive information.

Circling back to how important proper form validation is, here are some of the more common ways to leave yourself open to SQL Injection.

#### SQLI based on 1=1 is always true

Imagine a simple SQL statement as such:

	"SELECT * FROM users WHERE user_id = " + $uid;

The statement above is a select statement grabbing the information in a user's table where the user id is equal to the user id that is submitted by the form the user filled out. If there is nothing preventing the user from entering specific information into the input field, they could potentially enter something like: **105 or 1=1**.

This would result in a SQL query like this:

	"SELECT * FROM users WHERE user_id = 105 OR 1=1"

The SQL statement is valid. It will return all the rows in the table because the following is always true:

	WHERE 1=1

Due to the simplicity of the example, it might seem innocuous, but imagine if the user table stored login information, such as passwords.

#### SQLI based on ""="" is always true

On most occasions, a login form is very straightforward, containing an input field for the username and one for the password. Based off of this assumption, an ingenious foe would be able to gain access to usernames and passwords in a database by inserting `" or ""="` into the username or password field.

The resulting SQL statement would look something like this:

	"SELECT * FROM users WHERE username ="" OR ""="" AND password = "" OR ""="""

Much like the previous example, it's easy to extract all types of information when a clause is always true.

#### SQLI based on batched SQL statements

Using the same example we previously mentioned, let's say our malintent user decides to enter the following into the open text area:

	105; DROP TABLE posts;

Without proper validation the SQL queries that will be executed are:

	"SELECT * FROM users WHERE user_id = 105; DROP TABLE posts;"

Now, we're able to select a specific user from the database - but they also deleted the table **posts**. And there goes your blog's content.

#### Parameters for Projection

In the section about file uploads, we discussed the ineffectiveness of blacklisting. This holds true when it comes to trying to prevent SQL injection. Many words and characters that build valid and dangerous SQL statements (like delete, drop, semicolons, and quotation marks), are used in common language and should be allowed.

The only proven way to protect yourself and your website from SQL injection attacks is to use SQL parameters.

Here is an example of how to do it in PHP:

	$sql = $db->prepare("INSERT INTO users (username, user_password, user_email) VALUES (:usr, :pw, :email)");
	$sql->bindParam(‘:usr', $inputUsername);
	$sql->bindParam(‘:pw', $inputUserPassword);
	$sql->bindParam(‘:email', $inputUseEmail);
	$sql->execute();

### Cross-site Scripting (XSS)

Cross-site scripting, also known as XSS, takes advantage of security vulnerabilities in the browser or another type of interpreter, rather than the site itself. The reason that the acronym is XSS rather than CSS is so security professionals don't confuse it with Cascading Stylesheets (which is commonly known as CSS). Much like SQL Injections, XSS security holes are difficult to trace to a single source.

Cross-site scripting can happen when an attacker tries to pass JavaScript or another type of scripting code into a form to attempt to run malicious code to other visitors of your site. Once the site collects the data, it can create an output page appearing to be valid content from your site. However, this page will contain the malicious data sent to it from the code sent through the form. These "spoofs" will attempt to trick the user into revealing their password, other vital information or even paying to get rid of what they are duped into believing is a virus.

Now, referring back to server-side validation of web forms, you should always encode or strip out HTML tags from user inputs before passing on the information. There's more than just solid server-side validation to prevent XSS attacks. It requires diligent work on the part of the developers and a serious dive into testing security. To help test for XSS vulnerabilities you can use a web vulnerability scanner. This tool will crawl your site and identify URLs/scripts that are exposed so that you can easily remedy any holes in your security.

### Cross-Site Request Forgery (CSRF/XSRF)

Cross-site request forgery is a serious exploit that is used by the most dubious of attackers to trick a user into performing an action they didn't intend to. This is usually through a forged site. The attacker will present users with a message saying that their account has been suspended, there was a password change, or some other vital information was compromised. Panicked users will then unknowingly submit information to this forged site. From there, the attacker can do things like update the user's email to their own email and request a password reset, eventually enabling them to hijack the user's account. Depending on the site, this can give the attacker access to the unsuspecting user's billing information and other crucial information.

Using unique identifiers that can be verified are helpful in ensuring that an action is actually being performed by the user rather than a malintent third party. Another way to prevent CSRF attacks is to check the Referer Header. It is impossible to spoof this in a CSRF attack. This is also useful when memory is scarce. Checking the referer header is a reasonable form of detection, but doesn't offer complete protection from CSRF intrusions.

You can also help prevent cross-site request forgery by implementing challenge requests. Things like CAPTCHAs and re-authentication options are strong defenses, but may impede the user experience.

### Running Outdated Software

Running outdated software is the vicious cycle developers have to deal with, especially when working with out-of-the-box content management systems, such as WordPress, that rely on third party plugins for extended functionality. With new security gaps discovered everyday, developers have to stay vigilant when it comes to keeping their products up-to-date. If you follow any change log to a piece of open source software, you will notice that updates are made pretty regularly to patch newly discovered security holes.

When signing on with an agency to manage your web project, I would recommend seeing if they offer some kind of long-term maintenance package. This may be in terms of a monthly, quarterly, or bi-yearly retainer, in which developers go in and make sure all packages and security upgrades are up-to-date. Another benefit of this lies within the quick-paced evolution of the industry as methods are always being improved on. These maintenance packages could also encompass these upgrades as well.

### Session Hijacking

Session hijacking can occur on standard HTTP pages, but can also occur when a SSL certificate isn't implemented correctly. There are different measures you can take to make session hijacking extremely difficult, based on your security needs.

#### Do NOT put session IDs in the URL

If a session ID is included in the URL, not only could this invite session hijacks, but it may cause you to break the back button, since the URL would be different every time. In PHP, it is important that you only use cookies for sessions. Session cookies are not immune to hijacking, but are able to be rendered worthless to anyone other than the user they are associated with. Another thing to note: session files should be stored in a place only accessible by a single server user and a single website at a time - the globally accessible directories, such as /tmp leave vulnerabilities to be exploited.

#### Re-Authentication to make session hijacking worthless

If you have a website where users have accounts and interact with the site in various ways, you already have a secure login of some variation. In this instance, you may have interactions that require the same parameters to be valid. This means, that if the user wants to update any of their account information, post comments to the site, etc, they are required to provide their login credentials before the form post is submitted. By doing so, hijacked session is rendered useless.

If Javascript or cookies are required, it's wise to ensure some level of security. Good practice would be to use the registration and login pages to deliver this information.

#### SSL is all about trust

The secure SSL flag must be set with the session cookie or the cookie won't be encrypted by the SSL handshake. When it comes to SSL, trust is the issue. Web browsers will only trust certain certificate authorities, whereas users will trust what the browser trusts. And therein lies the problem. You have a responsibility to ensure that all confidential user data is transferred with a layer of security and stored in an encrypted state. That way, even if data is hijacked, only minimal damage can occur.

### So - What Did We Learn?

Let's review what we've gone over here, as it was pretty involved. Hopefully we convinced you of the following:

Client and server-side validation is a must.
Password creation should not be taken lightly.
You should probably never use a blacklist - getting it right is hard.
Allowing users to upload files to your site is risky - use additional security and form validation.
Proper sanitation of all form fields will help alleviate the SQL Injection problem.
XSS re-enforces the severity of needing solid server-side validation on your forms.
Be careful about cross-site request forgeries. As Benjamin Franklin said - "An ounce of prevention is worth a pound of cure."
Stay on top of your out-dated software. Maintenance retainers are worth the added cost.
Do not include session IDs in the URL.
Always pass confidential information over SSL and store it in an encrypted state.

You have the tools needed to keep your website secure - now use them!


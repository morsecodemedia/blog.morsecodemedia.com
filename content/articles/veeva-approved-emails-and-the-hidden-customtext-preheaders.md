---
title: "Veeva Approved Emails and the Hidden customText Preheaders"
description: "Learn about the importance of preheader text in Veeva Approved Emails, how to optimize it for better email engagement, and best practices for crafting effective preheaders that enhance your email campaigns."
createdAt: 2024-06-24T12:30:00-04:00
tags:
draft: false
---

## What Is A Preheader?

A preheader is the short summary text that follows the subject line when viewing an email from the inbox. Many mobile, desktop and web email clients provide email preheaders to tip you off on what the message contains before you open it.

Generally, this line of text comes from the first text found in the email campaign. On mobile clients, in particular, the preheader can mean the difference between someone opening your email and archiving it&mdash;so you generally want it to be something meaning ful. That is a summary of your offer, not your campaign's web version message or the remnants of social sharing links.

### How Long Should Preheader Text Be?

Your email preheader text should be between 40-130 characters long. This range makes sure that your preview text appears in both desktop and mobile email clients.

Preheader code might look something like this:

```
<div class="preheader" style="font-size:0px;line-height:0px;max-height:0px;max-width:0px;mso-hide:all !important;overflow:hidden;visibility:hidden;display:none;">This is an example of some preheader text</div>
```

Just a `<div>` with a bunch of inlined ways to make it visually disappear from various email clients.

## The Problem

 The problem comes in when we are providing multiple subject lines in a picklist, and trying to align specific preheader text with each of those subject lines. Well, you can't, at least if you dig through the Veeva documentation and/or scour the depths of the Internet.

 The issue is when the rep loads an email template in Veeva that has the `customText` token and proceeds to replace it with a `<select>` dropdown of the options. The problem with that is that it renders within the email markup that the `customText` lives in, so this...

 ```
<div class="preheader" style="font-size:0px;line-height:0px;max-height:0px;max-width:0px;mso-hide:all !important;overflow:hidden;visibility:hidden;display:none;">{{customText[This is the first optional hidden preheader|And this is a second optional hidden preheader]}}</div>
```

becomes something like this...

```
<div class="preheader" style="font-size:0px;line-height:0px;max-height:0px;max-width:0px;mso-hide:all !important;overflow:hidden;visibility:hidden;display:none;">
  
  <span class="AE_customText" tagtext="customText" required="false">
    <select id="0" class="hideCustomTextValues">
      <option id="0_0" value="This is the first optional hidden preheader">This is the first optional hidden preheader</option>
      <option id="0_1" value="This is the first optional hidden preheader" style="display: none" hidden="">This is the first optional hidden preheader</option>
      <option id="0_2" value="And this is a second optional hidden preheader">And this is a second optional hidden preheader</option>
      <option id="0_3" value="And this is a second optional hidden preheader" style="display: none" hidden="">And this is a second optional hidden preheader</option>
    </select>
  </span>
  
</div>
```

### Spot The Problem

The `<select>` is within your hidden preheader markup, so as you might expect, it doesn't render the dropdown in Veeva for the rep.

## The Solution

With the magic of CSS, we can show the dropdown in Veeva but continue to hide it in the final rendered email, using `:has()`.

Selecting the `.preheader` class by looking to see if it contains the Veeva `.AE_customText` class and undo all the hiddenness of the preheaders, like so:

```
@support selector(:has(*)) {
  .preheader:has(.AE_customText) {
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
    overflow: unset !important;
  }
}
```

_Author's Note: I typically do not support the use of `!important`, however in this specific instance, it is warranted._

Veeva will now show the dropdown so you can make a choice, but when the email is rendered anywhere else the `.AE_customText` class won't exist and none will be the wiser!

## Implementation For MJML

```
<mjml>
  <mj-head>
    <mj-attributes>
      <mj-class name="preheader" display="none" font-size="0px" line-height="0px" max-height="0px" max-width="0px" mso-hide="all !important" opacity="0" overflow="hidden" visibility="hidden" />
      <mj-all font-family="Arial, sans-serif" font-size="18px" line-height="1.3" />
    </mj-attributes>
    <mj-style>
      @supports selector(:has(*)) {
        .preheader:has(.AE_customText) {
          display: block !important;
          opacity: 1 !important;
          visibility: visible !important;
          overflow: unset !important;
        }
      }
    </mj-style>
  </mj-head>
  <mj-body>
    <mj-hero>
      <mj-text mj-class="preheader">
        <span class="preheader">
          {{customText[Preheader Text Option 1|Preheader Text Option 2|Preheader Text Option 3]}}
        </span>
      </mj-text>
    </mj-hero>
  </mj-body>
</mjml>
```

## What Else To Know About Picklist Tokens

Note the following when using picklist tokens:
* All configured picklist options are stamped on the Email_Config_Values_vod field of the corresponding Sent_Email_vod record.
* Zero-width non-jointer tokens (`&zwnj;`) should not be used in User Input Tokens (Text and Picklist Tokens).
* The first picklist value in Subject lines can be a NULL/blank value. This forces the user to select a subject before sending the email.
* Superscript tags are not supported in the subject line for an Approved Email template. However, content creators can add superscript to the subject line by cutting and pasting a character that is already in superscript into the Subject field in Vault.

  `{{customText[R-Ball®|Trademark™|Degree°F]}}`
  Notice how the <sup>&reg;</sup> isn't superscripted, but the &trade; and &deg; are, because the glyph (the image of the character within the font's definition) is superscript. However, the registered symbol varies from one font to another. It's a full-size character in many fonts, including Times New Roman, Arial, Courier New, Franklin Gothic, and Tahoma.

## Additional Resources

[Veeva Documentation: Approved Email Confiuration Tokens](https://crmhelp.veeva.com/doc/Content/CRM_topics/Multichannel/ApprovedEmail/ManageCreateContent/CreatingContent/ConfigTokens.htm)

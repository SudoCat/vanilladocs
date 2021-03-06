---
title: Setting up SSL (https)
layout: docs
categories: ["Features","SSL"]
---

## Setting up SSL (https) with Vanilla Cloud

Vanilla offers SSL support in Corporate plans and above. In order for us to to enable SSL for your forum, you will need to provide Vanilla with the following:

```
Certificates start like this:
-----BEGIN CERTIFICATE-----
```

```
Private keys start like this:
-----BEGIN RSA PRIVATE KEY-----
```

1. The **SSL Certificate** for your forum's domain in PEM format.

2. The **SSL Certificate Private Key** for your forum's domain in PEM format, and with **no password**.

3. The optional **Intermediate SSL Certificate** for your certificate issuing authority.

### How to obtain your SSL certificates

Usually, you'll get an SSL certificate in one of two ways:

1. **Ask an IT professional at your company**. They should know exactly what an SSL certificate is and can coordinate sending a certificate to Vanilla's cloud support. Showing them this documentation will also help.

2. **Obtain a new SSL certificate through a Certificate Authority**. Companies like Verisign and TRUSTe act as Certificate Authorities (CA) and you can purchase an SSL certificate through them. Explaining the entire process of purchasing your own SSL certificate is going to be different for each vendor and is beyond the scope of this documentation. We recommend contacting the support channel of a CA to get more information on purchasing a new SSL certificate.

#### What is this "Intermediate SSL Certificate"?

SSL has 2 components: trust and encryption. Encryption is fairly straightforward: the certificate is used to encrypt communication between the client and the server. Trust, on the other hand, is more complex. Web browsers are pre-configured to "know" about a certain set of CAs, but if your certificate was issued by a CA that is not in that list, your browser does not know whether it can be trusted. The intermediate certificate solves that problem by connecting the broken chain between your certificate and a CA that the browser trusts. Intermediate certificates are an important part of ensuring that customers see a green "Secure" symbol in their address bar when they access your site.

#### Why can't Vanilla create an SSL certificate for your site?

The SSL process would be much smoother if Vanilla could just set it up without requiring anything from you. This just isn't possible though due to the underlying security of SSL and the Internet. **The owner of a domain name is the only person that can generate an SSL certificate.** And if you think about it, this is a good thing. If we could generate an SSL certificate for you then so could a hacker.

### How to give SSL certificates to Vanilla

Once you have your SSL certificates you'll need to give them to Vanilla support. **Don't just email your SSL certificates to us.** These certificates are sort of like passwords and special care should be taken to provide them to us in a secure way. Here are some options.

1. **Secure FTP (sftp)**. If you've been given an SFTP account on Vanilla's project server, then you should upload your certificates there.

```
-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG/MacGPG2 v2.0.20 (Darwin)
Comment: GPGTools - https://gpgtools.org

mQENBFOPIr0BCACy3qGvAMOG48rmqHwPchaot4YL1W7LoWUaNGNr5YjqnRhdMy8c
vca5Si0Z1QJ57N1cYjtG9+75IpUDZ0KhCaVzx4Smaqmx2Ezgp79/Kr4hY5tdHvky
0W8B0XNU9U5hJtPuSW0wCpiF68du1d5OcVDDuCe1f4vCwJbiZwluNeIUrUTZeKI1
8hO5u1gPQGyIX5LL7X6XWQ9Prvn6wmqscdhg8DlXFfDh64zhqhGC/uPCLXHFcHcz
RrBBQ1iXCBd8TRfy8XBOGbzAiWEaO17mhxlIGTdfsAKYc/UU5TkZDQFq+ipuvyrD
Zsvjk93FPBd4x1zPFCu+40HFQWh0mmsoe3RpABEBAAG0RFZhbmlsbGEgT3BlcmF0
aW9ucyAoVmFuaWxsYSBPcGVyYXRpb25zIFRlYW0pIDxvcHNAdmFuaWxsYWZvcnVt
cy5jb20+iQE9BBMBCgAnBQJTjyK9AhsDBQkHhh+ABQsJCAcDBRUKCQgLBRYCAwEA
Ah4BAheAAAoJEIkj1hflHtRHKu0IAIJ02m3Q0YsWtVVTQ3RI+yz/5G5ewjp+a3iv
oZybmNGInYEIKRNSlSQYf7K7B7fogGr7pAq+aVHE6yUOIwsHiAnK6U2Qpo6/mrlr
U2CS24LwSMjX+1x6iV+REEQM9sRZ1olfvrdZAKLgqZZTMyK5/eOyHjgZktHJgzlo
mIzd5zHx1xopEKDcZnwqxNWvqaZwRIkdUXWuTVs+HqCG6Cc6sO701k0oJmMmWeoI
4khaIokv4VdEibvdD545ru/NjR3zPHUhsrkxX+EggCWJggZ7fiu+98AUbkhGM24T
cU4T3TaNsCgjaedgihVb6g1zdKrWCK2AXXOttR8i0PY+ZqSACdy5AQ0EU48ivQEI
AL8k9yPxIItjQ398+pZUplLDSufYzeMGGgJRJQUjfSGYBN8aPLWJ/E6MZPVRHmBT
jssIYhyxKUXTUY6M+hiTt0vpoYkD9oz3lLyvEzedgUJ8RrisGU+1dL3P5+YJf1/C
tC468OkQxAB70oMCag/PXnkljB5fZzgFhfQs8IHeUrdTyVlhrRkUxbh5EjOj3cnE
nKlW2eNM2QG/FduBYmPaPf9slcGDBo3SacQ+IcmlEH83ZycRhcoaSfa6sKVdQqq8
/FnhtNsOWnu1kYEvX/Qc8Uaoub40ESVTR5Qdj97IiH1NO6q2h5nAwmMC74q0EZzP
sQE1vqdsQE+oAEkaNyz5P68AEQEAAYkBJQQYAQoADwUCU48ivQIbDAUJB4YfgAAK
CRCJI9YX5R7UR5K8B/970DkBOsiZkSWBVuNVedijD4LSo4LF1o+Xm9/DUH5yXe99
CHuiK6iCHRGrJAGlUC2XETB4mA+dwCLQ/Gs4HTLSWoqeWcOfoyyLlYYHk5whWUw3
DI3Qj/hH+GvsJoJ2LdgJWBKU8WsXrR/GS9WqhV7sERQbaoUKB8ZbledtXlT7Vjmb
U6QvNWXl0gzCnBhdcslYzlZ5KxpQqX67Qo020shfemAKJkwXuMJAMB6Q7p5L+JE9
lFkyInx1ZzHOrVfpO9M8l08+9ArpH3+7RvSS60oMF56fNQwuOKiGgHLOZhkiRao7
mdgI8Hx09QYcxGjehtMJNzQQ6qryx8UNAaEtB8/w
=QysZ
-----END PGP PUBLIC KEY BLOCK-----
```

2. **PGP Encrypted Email**. If you have the ability to send PGP encrypted email then you can send your SSL certificates that way. Please send them to: ops@vanillaforums.com. Our public key is included in this documentation.

### SSL only sites

If you have a strict security policy that requires that your site only be served through https, we can configure your site to always use ssl. We don't recommend forcing SSL during the set up process in order to help us troubleshoot any issues with the configuration process.

### Gotchas

* When your site is being served through SSL you may encounter problems if you are externally linking to non-SSL resources such as javascript, css, or images. Keep this in mind if you are custom themeing your site or have other customizations enabled.
* If you are using jsConnect, make sure your authentication url is available over SSL or else jsConnect will fail.
* Don't give us a wildcard certificate. Usually you should set up Vanilla as a subdomain of your main site (ex. forums.yoursite.com). Make sure you generate certificates just for the forums and not a wildcard certificate that can be used for your entire domain. This is for your own security and serves to reduce your risk and our liability.
* Not all CAs pro-actively provide intermediate certificates, and some CAs only provide them as secondary downloads instead of bundling them with your certificate when you download it.

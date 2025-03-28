## TCP/IP model

The TCP/IP model is a suite of protocols that are used to communicate over the internet. It is a layered model that is used to understand how data is transmitted over a network. The TCP/IP model is similar to the OSI model, but it has fewer layers.

The TCP/IP model has four layers of network protocols: (IP Suite)
- Application layer : Examples include HTTP, FTP, SMTP, DHCP etc.
- Transport layer: Resposible for reliable data transfer between two devices. Examples include:
    - TCP (Transmission Control Protocol): Provides reliable, connection-oriented communication between devices.
    - UDP (User Datagram Protocol): Provides unreliable, connectionless communication between devices but is faster than TCP.
    - When data is not required to be delivered reliably, UDP is used. When data needs to be delivered reliably, TCP is used.
    - Ex: TCP is used for web browsing, email, file transfer etc. UDP is used for video streaming, online gaming etc.
- Internet layer: Responsible for routing data across different networks to reach the destination. Examples include:
    - IP (Internet Protocol): Responsible for addressing and routing packets to their destination.
    - ICMP (Internet Control Message Protocol): Used for error reporting and diagnostic functions like ping.
    - ARP (Address Resolution Protocol): Used to map IP addresses to MAC addresses.
- Link layer: Responsible for sending data over a physical network (like Ethernet, Wi-Fi, etc.)

Each layet below provides services to the layer above it. The application layer is the topmost layer and the link layer is the bottommost layer.

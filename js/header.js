class SiteHeader extends HTMLElement {
connectedCallback() {
this.innerHTML = `
<!-- =============================================
            Theme Header One
      ============================================== -->
<header class="header-one">

  <!-- Top Header -->
  <div class="top-header">
    <div class="container clearfix">

      <div class="logo float-left">
        <a href="index.html">
          <img src="images/prajai_tax_logo.png" alt="Prajai Tax" style="height: 60px;">
        </a>
      </div>

      <div class="address-wrapper float-right">
        <ul>

          <!-- Address -->
          <li class="address">
            <i class="fa-solid fa-location-dot"></i>
            <h6>Address:</h6>
            <p>RS Puram, Coimbatore, Tamil Nadu</p>
          </li>

          <!-- Email -->
          <li class="address">
            <i class="fa-solid fa-envelope"></i>
            <h6>Mail us:</h6>
            <p>info@prajai.com</p>
          </li>

          <!-- CTA -->
          <li class="quotes">
            <a href="#">GET A FREE CONSULTATION</a>
          </li>

        </ul>
      </div>

    </div>
  </div>

  <!-- Menu -->
  <div class="theme-menu-wrapper">
    <div class="container">
      <div class="bg-wrapper clearfix">

        <!-- Menu -->
        <div class="menu-wrapper float-left">
          <nav id="mega-menu-holder" class="clearfix">
            <ul class="clearfix">

              <li class="active"><a href="index.html">Home</a></li>

              <!-- <li>
                      <a href="#">Pages</a>
                      <ul class="dropdown">
                        <li><a href="about.html">About us</a></li>
                        <li><a href="team.html">Our team</a></li>
                        <li><a href="faq.html">Faq's</a></li>
                        <li><a href="404.html">404</a></li>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="shop-details.html">Shop details</a></li>
                        <li>
                          <a href="#">Third Level menu</a>
                          <ul>
                            <li><a href="#">Demo one</a></li>
                            <li><a href="#">Demo two</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li> -->

              <li class="has-dropdown">
                <a href="services.html">Our Services</a>

                <ul class="dropdown">
                  <li><a href="income-tax.html">Income Tax Filing</a></li>
                  <li><a href="gst.html">GST Services</a></li>
                  <li><a href="corporate-tax.html">Corporate Tax</a></li>
                  <li><a href="accounting.html">Accounting & Bookkeeping</a></li>
                  <li><a href="payroll.html">Payroll Management</a></li>
                  <li><a href="company-registration.html">Company Registration</a></li>
                  <li><a href="audit.html">Audit & Compliance</a></li>
                  <li><a href="tax-advisory.html">Tax Advisory</a></li>
                  <li><a href="business-valuation.html">Business Valuation</a></li>
                  <li><a href="tds-filing.html">TDS Filing</a></li>
                  <li><a href="wealth-management.html">Wealth Management</a></li>
                </ul>
              </li>

              <!-- <li>
                      <a href="#">Portfolio</a>
                      <ul class="dropdown">
                        <li><a href="project.html">project</a></li>
                        <li><a href="project-details.html">Project details</a></li>
                      </ul>
                    </li> -->

              <!-- <li>
                      <a href="#">Blog</a>
                      <ul class="dropdown">
                        <li><a href="blog.html">Blog List</a></li>
                        <li><a href="blog-grid.html">Blog Grid</a></li>
                        <li><a href="blog-details.html">Blog details</a></li>
                      </ul>
                    </li> -->

              <li><a href="contact.html">Contact</a></li>

              <li><a href="about.html">About us</a></li>

            </ul>
          </nav>
        </div>

        <!-- Right Widgets -->
        <div class="right-widget float-right">
          <ul>

            <!-- Social Icons -->
            <li class="social-icon">
              <ul>
                <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
              </ul>
            </li>



            <!-- Search -->
            <li class="search-option">
              <div class="dropdown">
                <button type="button" class="dropdown-toggle" data-toggle="dropdown">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>

                <form action="#" class="dropdown-menu">
                  <input type="text" placeholder="Enter Your Search">
                  <button>
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </div>
  </div>

</header>
`;
}
}

customElements.define("site-header", SiteHeader);
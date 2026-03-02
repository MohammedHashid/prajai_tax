class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- =============================================
            FOOTER START
    ============================================== -->
    <footer class="theme-footer-one">

      <div class="top-footer">
        <div class="container">
          <div class="row">

            <!-- About -->
            <div class="col-lg-4 col-md-6 mb-4">
              <h6 class="title">About Prajai Tax</h6>
              <p>
                Prajai Tax provides expert tax, accounting, and compliance services for individuals 
                and businesses. We ensure accurate filing, legal compliance, and financial growth.
              </p>

              <div class="contact-info">
                <p><strong>📞 Call:</strong> <a href="tel:+919876543210">+91 98765 43210</a></p>
                <p><strong>✉ Email:</strong> <a href="mailto:info@prajaitax.com">info@prajaitax.com</a></p>
              </div>

              <!-- Social -->
              <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
              </div>
            </div>

            <!-- Services -->
            <div class="col-lg-3 col-md-6 mb-4">
              <h6 class="title">Our Services</h6>
              <ul>
                <li><a href="income-tax.html">Income Tax Filing</a></li>
                <li><a href="gst.html">GST Services</a></li>
                <li><a href="accounting.html">Accounting & Bookkeeping</a></li>
                <li><a href="payroll.html">Payroll Management</a></li>
                <li><a href="company-registration.html">Company Registration</a></li>
                <li><a href="tax-advisory.html">Tax Advisory</a></li>
              </ul>
            </div>

            <!-- Quick Links -->
            <div class="col-lg-2 col-md-6 mb-4">
              <h6 class="title">Quick Links</h6>
              <ul>
                <li><a href="about.html">About Us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
                
              </ul>
            </div>

            <!-- CTA -->
            <div class="col-lg-3 col-md-6 mb-4">
              <h6 class="title">Get Free Consultation</h6>
              <p>Need help with tax filing or business registration?</p>

              <a href="contact.html" class="btn btn-primary">Get Free Consultation</a>

              <!-- Trust Points -->
              <div class="trust mt-3">
                <p>✔ 500+ Clients Served</p>
                <p>✔ 5+ Years Experience</p>
                <p>✔ 100% Compliance Support</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="bottom-footer">
        <div class="container">
          <div class="row align-items-center">

            <div class="col-md-6">
              <p>&copy; 2026 Prajai Tax. All Rights Reserved.</p>
            </div>

            <div class="col-md-6 text-md-right">
              <ul class="footer-menu">
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

    </footer>
    <!-- =============================================
            FOOTER END
    ============================================== -->
    `;
  }
}

customElements.define('site-footer', SiteFooter);
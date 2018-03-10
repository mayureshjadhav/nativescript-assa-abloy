Pod::Spec.new do |s|
  s.name             = "SeosMobileKeysSDK-Release"
  s.version          = "6.1.1"
  s.summary          = "Open readers with your iOS device"
  s.homepage         = "http://www.assaabloy.com/seos"
  s.license      = {
     :type => 'Copyright',
     :text => <<-LICENSE
       Copyright 2017 ASSA ABLOY Mobile Services. All rights reserved.
       LICENSE
   }

  s.author           = { "ASSA ABLOY Mobile Services" => "mobilekeys@assaabloy.com" }
  s.source = { :path => '.' }

  s.platform     = :ios, '8.0'
  s.ios.deployment_target = '8.0'
  s.requires_arc = true

  s.frameworks = 'Foundation', 'CoreTelephony', 'Security', 'CoreLocation', 'CoreBluetooth', 'CoreMotion', 'UIKit', 'SystemConfiguration', 'LocalAuthentication'
  s.module_name = 'SeosMobileKeysSDK'

  s.dependency 'JSONModel', '~> 1.7.0'
  s.dependency 'CocoaLumberjack', '~> 3.2.1'
  s.dependency 'Mixpanel', '~> 3.2.3'
  s.dependency "BerTlv", '~> 0.2.2'
  s.vendored_frameworks = 'SeosMobileKeysSDK.framework'

end
